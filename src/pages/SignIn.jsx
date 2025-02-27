import { useState, useContext } from "react";
import { Link } from "react-router";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AuthContext } from "@/context/AuthContext";
import { FcGoogle } from "react-icons/fc";

export function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, loginWithGoogle } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const result = await login(username, password);
    if (!result.user) {
      setError(result.message || "Login failed");
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-[400px] p-6 shadow-lg rounded-lg bg-white">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
              Welcome back
            </h1>
            <p className="text-sm text-gray-500">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-sm text-red-500">{error}</p>}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">
                Username
              </label>
              <Input
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className=""
              />
            </div>
            <div className="mb-5">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="focus:border-1"
              />
            </div>
            <Button
              type="submit"
              variant="outline"
              className="cursor-pointer w-full"
            >
              Sign In
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="bg-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 border-gray-300 hover:border-primary transition cursor-pointer"
            onClick={loginWithGoogle}
          >
            <FcGoogle className="h-5 w-5" />
            Google
          </Button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-primary font-semibold hover:underline transition"
            >
              Sign up
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
