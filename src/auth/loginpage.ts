export const loginPage = `
<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="flex items-center justify-center h-screen bg-gray-100">

  <div class="w-80 p-6 bg-white rounded-2xl shadow-xl">

    <h2 class="text-2xl font-semibold text-center mb-6">
      Login
    </h2>

    <form method="POST" action="/auth/login" class="flex flex-col gap-3">

      <input
        class="border p-2 rounded-md"
        type="email"
        name="email"
        placeholder="Email"
        required
      />

      <input
        class="border p-2 rounded-md"
        type="password"
        name="password"
        placeholder="Password"
        required
      />

      <button
        class="bg-black text-white p-2 rounded-md hover:bg-gray-800"
        type="submit"
      >
        Login
      </button>

    </form>

  </div>

</body>
</html>
`;