
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Logo } from "@/components/Logo";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login - replace with actual authentication
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome back!",
        description: "You've successfully logged in.",
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background">
      {/* Left side with image */}
      <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" 
          alt="Person working on career development" 
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
          <h2 className="text-3xl font-bold mb-2">Navigate Your Career Path</h2>
          <p className="text-white/80">Your professional journey starts here</p>
        </div>
      </div>
      
      {/* Right side with form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 lg:p-16">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center mb-8">
            <Logo className="mb-4" />
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Career Compass</h1>
            <p className="text-muted-foreground mt-2">Sign in to your account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                className="w-full transition-all duration-200 focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full transition-all duration-200 focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
            
            <div className="text-center text-sm text-muted-foreground mt-4">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-600 hover:text-blue-800 hover:underline">
                Create an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
