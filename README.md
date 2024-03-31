
![8-stream-high-resolution-logo-transparent](https://github.com/himanshu8443/HayasakaStream/assets/99420590/813cca3a-a3c3-4f40-8a79-df5b866edf68)
 - Api provides Movies/Series streaming links by IMDB IDs.
 - Most commonly provided languages - Hindi, English, Tamil, Telugu, Bengali.

#  Documentation
## Get media Info
Provides information file and key which is used to get steram link.
 
**Endpoint** - `/api/v1/mediaInfo?id=tt1877830`

**Response** - 
```
{
    "success": true,
    "data": {
        "playlist": [
            {
                "title": "Hindi",
                "id": "24b8c045e7fcd28fb2ee654de75a5771",
                "file": "~0ALZ3tMP71lNTMdSBfbldjRRjLuTyceuX41C5TkTXfD5VWq-lExFCZWoHOr3rx1BLk-Ry-BI+1M3g7u6Q0QsROSCWkIPm+0O8vejnftI6c$ikYspRLC6glMxcYFec8ILFBLrTT4uOs8fE4dx3aDu-t88g5aAHsTgfyOLYS0QyxEAmJqa5ryEoOLK4jb3zPPMjxWqtE9-TYbnE9UI$OJxw7N1H5+yiCSPmxCp4DECTluWeWV9j-g5+9up7XkQ0Q-rF6yEeqtNbUIqJohUOXhWet7aGgLwzSd7RldFBs+8hfQ!"
            },
            {
                "title": "English",
                "id": "fd93fd0a7fc57f1e0c9c54110322a05f",
                "file": "~GTE1z8T8rAcuWI3QaGEKR0oNFlOEr6grKv-lGchVBqFrFXq0BU5tJswuynqZcHf8IB8hXkLSozWK1LsrFKn9UFuo1FsNYq4obBiEA$SKYEqXZ6iKR4PB6wnPpkU$6ZI5pRHPJZIgJAGNKv+RbbDRCGc50wFuraeCa8Mn9Q114FD1Kk1XBBHeafA-yqYcRoyFmLoOjW8jpaT-qMEdVwrPqAjIx3K40BU1piKi3wYFA1CTLSERXQRUUYMB9847FkbOfhlHxchONfrwcja0+NM1-hU$+$8ARCprBKD8R77JzcY!"
            },
            {
                "title": "Bengali",
                "id": "514592bb6a9ddefadbac9a0a3d5853d0",
                "file": "~8i-Mu-WONoEdJ9whQe+Ldow7qCqtzIq7BVxxzRem-s+-SF5sgmF3n8Q1g$ZUztNliWstIDp+mAjzbZyZJvBpfhcTLc4XdEsjPYOVJon193lL+dlYNX1yfJIm1TMMlVEl+illL+C3yG-L41UDM3N-Ovju6q+qbKJ6fFzDcEiaAQ4r8AEPfiAir3qNz3XdS+CELa4-TZp$MFGJ89wW0-hEgC1SsvpeT8xwztjMTfd6oonUA4qJAqXXDGGnwZWB$OXFxy9q4sezs3yCEtSp$eYxEXdyWvzZBp0mT-baIkot7$s!"
            },
            {
                "title": "Tamil",
                "id": "38d4c32d7e29000d506ce2f8f6270baf",
                "file": "~5A+LJm$L$KlNx7kfKAT5j+H4A9ISTI$hdS8qx8DVIpzz3$QvThc1r8oj-ZwgvDk-4R$dikyvfN1vhcmxQ5LaxMcXOgd9M5$0xST3-NHirwI0iCWN0HevWfmK-GyRWHFbaN7+xjblvFkgjL9EmHnh$D8Avci1RYSJfN0LuqqoJB3nV0+hFGys4KYUMlnJhLWbl1k5R3AMNOr-sLG8wCheNemp74hcSk4+IVXnjCu$K5StEbejCNb$1yXPkjF6ucAbV7ZZp-Rr+wZagGSwA+sGLTmAk-Uk3R1HgyAmO$JVsQM!"
            },
            {
                "title": "Telugu",
                "id": "693e0bcfca53a67473f24b20e72bbcdc",
                "file": "~MxqPD98luqAA3ynyU6pk-AeOQl$WkokFfUUWNv9JODWbaQ7FI6YXr6Jt7$HANlffMb3JMFyzALQRHlVyxwwLlpLrLKMmgZr-ACmNldEysL15fwab$-4WFMSPTqNyw56Np4LYZ7kVsjZexZz0rk0WK+iNAn6en63+CM1ZSFpAWMeR5Ync5rZ-JfjINucVzaobO75PAaax7XbzbTFsYfPlkCMQHBjU39vfjwg3Px9iv7DKT1kayBWxqyqEgx1jILeb48eqhhtq8JuhPYqatZ1FqfRtz8IYUOx1mdBokw9dutY!"
            }
        ],
        "key": "yZBAPr58y7RIOpj4K$VhgXhXBTHz-bmW++CaWFtWPFaIMUpqmVCnuRc0IXnytMAf"
    }
}
```

**Try** - [try](https://8-stream-api.vercel.app/api/v1/mediaInfo?id=tt1877830)

|Query|Description|Required|Method
|--|--|--|--
|id|IMDB ID of movie/series|True|Get

## Get getSeasonList
Provides available season, episodes and language info

**Endpoint** - `/api/v1/getSeasonList?id=tt11737520`

**Response** - 
```bash
{
    "success": true,
    "data": {
        "seasons": [
            {
                "season": "Season 1",
                "totalEpisodes": 8,
                "lang": [
                    "Hindi",
                    "English"
                ]
            }
        ],
        "type": "tv"
    }
}
```

**Try** -  [try](https://8-stream-api.vercel.app/api/v1/getSeasonList?id=tt11737520)

|Query|Description  | required
|--|--| --|
|id|IMDB ID of movie/series  |true


## Get Stream
Provides stream link.
**Endpoint** - `/api/v1/getStream`

**Method** - POST

**Response** - 
```bash
{
  "success": true,
  "data": {
    "link": "https://i-arch-400.friness-cherlormur-i-275.site/stream2/i-arch-400/2e69c15cc905832c1f9f8d93d594b928/MJTMsp1RshGTygnMNRUR2N2MSlnWXZEdMNDZzQWe5MDZzMmdZJTO1R2RWVHZDljekhkSsl1VwYnWtx2cihVT2lVbZJzTX1kMNRVQw0keNdnWqlVeZdVW65ERNFjWUVkeNpmRr5EVVd3TUFVP:1705469597:103.74.72.126:069d121bf24da6b6e19060020f57bfcd8812645bc1f289e36d9cc5381866a015/index.m3u8"
  }
}
```

|Body|Description  | required
|--|--| --|
file|get it form mediaInfo | true
key |get it form mediaInfo |true

**Example**
```bash
fetch('https://example.com/api/v1/getStream',
 { method: 'POST', headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify(
{ file: '~8i-Mu-WONoEdJ9whQe+Ldow...', 
 key: 'rcbeUV3KoCw-dSFJ-vN$-JwI4OXlCmOaAx05HkWyclbx46SNcazmpYmnFTXoNjo' }
)}) 
 .then(response => response.json()) 
 .then(data =>  console.log(data)) 
 .catch(error =>  console.error(error));
```

# Installation
  ```
   git clone https://github.com/himanshu8443/8StreamApi.git
  ```

 ```
  cd 8StreamApi
```
 ### node
  ```
   npm install
   npm run build
   npm run start
```
   
###  docker
```
docker build -t 8streamapi .
```
```
docker run -p 3000:3000 -it -d 8streamapi
```

# Deploy
## Vercel - [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhimanshu8443%2F8StreamApi)
Note- vercel free tier serverless response time limit is 10 sec and will stop if took longer
## Render - [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/himanshu8443/8StreamApi)
