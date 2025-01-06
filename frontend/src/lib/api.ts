// const BASE_URL = "http://localhost:3001";
const BASE_URL = "https://swiss-prototype.onrender.com";

export async function fetchAPI(input?: RequestInfo, options?: any | undefined) {
  const url = BASE_URL + input;
  const token = localStorage.getItem("tk");
  const newOptions: any = options || {};
  newOptions.headers ||= {};
  if (token) {
    newOptions.headers.authorization = `Bearer ${token}`;
  }
  newOptions.headers["content-type"] = "application/json";

  if (newOptions.body) {
    newOptions.body = JSON.stringify(newOptions.body);
  }

  const res = await fetch(url, newOptions);

  if (res.status >= 200 && res.status < 300) {
    return res.json();
  } else {
    throw {
      message: "Hubo un error",
      status: res.status,
    };
  }
}
export async function register(data: any) {
  try {
    const { name, email, password } = data;
    const response = await fetchAPI("/auth/register", {
      method: "POST",
      body: {
        name,
        email,
        password,
      },
    });
    return response;
  } catch (error: any) {
    throw {
      message: "Hubo un error",
      status: error.status,
    };
  }
}
export async function signin(data: any) {
  try {
    const { email, password } = data;
    const response = await fetchAPI("/auth/login", {
      method: "POST",
      body: {
        email,
        password,
      },
    });
    return response;
  } catch (error: any) {
    throw {
      message: "Hubo un error",
      status: error.status,
    };
  }
}
export async function updateTask(id: string, data: any) {
  console.log("data en api", data);

  try {
    const { title, description, status } = data;
    const response = await fetchAPI("/tasks/" + id, {
      method: "PATCH",
      body: {
        title,
        description,
        status,
      },
    });
    return response;
  } catch (error: any) {
    throw {
      message: "Hubo un error",
      status: error.status,
    };
  }
}
export async function deleteTask(id: string) {
  try {
    const response = await fetchAPI("/tasks/" + id, {
      method: "DELETE",
    });
    return response;
  } catch (error: any) {
    throw {
      message: "Hubo un error",
      status: error.status,
    };
  }
}
export async function createTask(data: any) {
  const { title, description, status } = data;

  try {
    const response = await fetchAPI("/tasks", {
      method: "POST",
      body: {
        title,
        description,
        status,
      },
    });
    return response;
  } catch (error: any) {
    throw {
      message: "Hubo un error",
      status: error.status,
    };
  }
}
