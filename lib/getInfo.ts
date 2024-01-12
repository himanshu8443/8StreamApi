import axios from "axios";
import * as cheerio from "cheerio";
export default async function getInfo(id: string) {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/play/${id}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        Origin: "https://allmovieland.fun/",
        Referer: "https://google.com",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
      },
    });
    const $ = cheerio.load(response.data);
    // get last script tag
    const script = $("script").last().html()!;
    if (!script) {
      return {
        success: false,
        message: "Something went wrong",
      };
    }
    // get json data from script tag
    const content =
      script.match(/(\{[^;]+});/)?.[1] || script.match(/\((\{.*\})\)/)?.[1];
    if (!content) {
      return {
        success: false,
        message: "Media not found",
      };
    }
    const data = JSON.parse(content);
    const file = data["file"];
    const key = data["key"];
    const playlistRes = await axios.get(`${process.env.BASE_URL}${file}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
        Origin: process.env.BASE_URL,
        "X-Csrf-Token": key,
        Referer: `${process.env.BASE_URL}/play/${id}`,
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
      },
    });
    const playlist = playlistRes.data;
    return {
      success: true,
      data: {
        playlist,
        key,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
