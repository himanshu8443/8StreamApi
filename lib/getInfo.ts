import getPlaylist from "./getPlaylist";

export const getInfo = async (id: string) => {
  try {
    const playlist = await getPlaylist(id);
    return {
      success: true,
      data: playlist,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
