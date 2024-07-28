const baseURL = "http://localhost:3000/api";

export const sendData = async (
  username: string,
  passwrod: string,
  todo: string,
) => {
  try {
    const post = await fetch(`${baseURL}/${todo}`, {
      method: "POST",
      body: JSON.stringify({ usr: username, pwd: passwrod }),
    });
    const result = await post.json();
    if (!post.ok) {
      throw new Error(result.status);
    }
    console.log(result.status);
    return result.status;
  } catch (err) {
    if (err instanceof Error) console.error(err.message);
    return null;
  }
};
