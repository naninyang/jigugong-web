// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    [
      {
        "uuid": "869c3289-3046-4c63-9f35-2b97f3ef8ebc",
        "id": 0,
        "engName": "all",
        "korName": "전체"
      },
      {
        "uuid": "f2a88da7-d599-4cb8-9647-b0cdd0780153",
        "id": 1,
        "engName": "zero",
        "korName": "버림없는"
      },
      {
        "uuid": "4c051c19-c218-4504-9748-6431809feda3",
        "id": 2,
        "engName": "vegan",
        "korName": "비건&채식"
      },
      {
        "uuid": "4f7c041c-e0a9-49e7-9b3d-afea90144262",
        "id": 3,
        "engName": "daily",
        "korName": "생활용품"
      },
      {
        "uuid": "62ade01a-1b8e-4d4b-b637-3f9bf7deb331",
        "id": 4,
        "engName": "cafe",
        "korName": "카페&빵집"
      },
      {
        "uuid": "1dc542a4-ee9e-4d7e-aa52-4e849d751e24",
        "id": 5,
        "engName": "grocery",
        "korName": "식료품"
      },
      {
        "uuid": "b08c35f1-6be3-46aa-951d-69b7a3c95bba",
        "id": 6,
        "engName": "restaurant",
        "korName": "음식점"
      }
    ]
  )
}
