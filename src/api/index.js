import request from'./request'
export async function getImg() {
    return await request.get("/api/rotation");
  }
