import React, { useState } from "react";
import { Home, User, List, Shield } from "lucide-react";

export default function FFBattleArena() {
  const [page, setPage] = useState("login");
  const [user, setUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    if (email || phone) {
      setUser({ email, phone });
      setPage("home");
    }
  };

  const tournaments = [
    { id: 1, name: "Squad Showdown", entry: "₹30", time: "8:00 PM" },
    { id: 2, name: "Booyah Clash", entry: "₹50", time: "9:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4 font-sans">
      <h1 className="text-3xl font-bold mb-4 text-yellow-400">FF Battle Arena</h1>
      {page === "login" && (
        <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full max-w-sm">
          <input type="email" name="email" placeholder="Email" className="p-2 rounded bg-gray-800 border border-gray-600" />
          <input type="text" name="phone" placeholder="Phone Number" className="p-2 rounded bg-gray-800 border border-gray-600" />
          <button type="submit" className="bg-yellow-500 text-black font-bold py-2 rounded hover:bg-yellow-400">Login</button>
        </form>
      )}

      {page === "home" && (
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-2">Available Tournaments</h2>
          <div className="space-y-3">
            {tournaments.map((t) => (
              <div key={t.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex justify-between items-center">
                <div>
                  <p className="font-bold text-lg">{t.name}</p>
                  <p className="text-sm text-gray-400">Entry: {t.entry} | Time: {t.time}</p>
                </div>
                <button onClick={() => setPage("register")} className="bg-yellow-500 text-black px-3 py-1 rounded">Join</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {page === "register" && (
        <div className="w-full max-w-sm">
          <h2 className="text-xl font-semibold mb-3">Register Tournament</h2>
          <form onSubmit={(e) => { e.preventDefault(); setPage("payment"); }} className="flex flex-col gap-3">
            <input type="text" placeholder="Free Fire ID" className="p-2 rounded bg-gray-800 border border-gray-600" />
            <input type="text" placeholder="Player Name" className="p-2 rounded bg-gray-800 border border-gray-600" />
            <button className="bg-yellow-500 text-black font-bold py-2 rounded hover:bg-yellow-400">Next</button>
          </form>
        </div>
      )}

      {page === "payment" && (
        <div className="w-full max-w-sm text-center">
          <h2 className="text-xl font-semibold mb-3">Payment Section</h2>
          <p className="mb-3 text-gray-300">Payment integration coming soon!</p>
          <button onClick={() => setPage("home")} className="bg-yellow-500 text-black px-4 py-2 rounded">Back to Home</button>
        </div>
      )}

      <div className="fixed bottom-0 bg-gray-900 w-full max-w-md flex justify-around py-2 border-t border-gray-700">
        <button onClick={() => setPage("home")} className="flex flex-col items-center text-xs"><Home size={20}/> Home</button>
        <button onClick={() => setPage("register")} className="flex flex-col items-center text-xs"><List size={20}/> Applied</button>
        <button onClick={() => setPage("profile")} className="flex flex-col items-center text-xs"><User size={20}/> Profile</button>
        <button onClick={() => setPage("admin")} className="flex flex-col items-center text-xs"><Shield size={20}/> Admin</button>
      </div>

      {page === "profile" && (
        <div className="w-full max-w-sm mt-4 text-center">
          <h2 className="text-xl font-semibold">Profile</h2>
          <p className="text-gray-400">Email: {user?.email || "-"}</p>
          <p className="text-gray-400">Phone: {user?.phone || "-"}</p>
        </div>
      )}

      {page === "admin" && (
        <div className="w-full max-w-sm mt-4">
          <h2 className="text-xl font-semibold mb-3">Admin Login</h2>
          <form onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              const pass = e.target.pass.value;
              if (email === "admin@gmail.com" && pass === "admin123") {
                alert("Admin logged in!");
                setPage("home");
              } else alert("Invalid credentials");
            }} className="flex flex-col gap-3">
            <input type="email" name="email" placeholder="Admin Email" className="p-2 rounded bg-gray-800 border border-gray-600" />
            <input type="password" name="pass" placeholder="Password" className="p-2 rounded bg-gray-800 border border-gray-600" />
            <button className="bg-yellow-500 text-black font-bold py-2 rounded hover:bg-yellow-400">Login</button>
          </form>
        </div>
      )}
    </div>
  );
}