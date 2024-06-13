export const metadata = {
  title: 'Hot Dog Le Francés',
  description: 'SEO Title',
};

export default function LoginPage() {
  return (
    <div>
      <h1>Log in</h1>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
