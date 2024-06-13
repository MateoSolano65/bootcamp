export const metadata = {
  title: 'SEO Title',
  description: 'SEO Title',
};

export default function RegisterPage() {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
