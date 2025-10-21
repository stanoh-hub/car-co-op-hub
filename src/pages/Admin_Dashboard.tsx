import React, { useState } from "react";
import {
  BarChart3,
  User,
  Users,
  Car,
  Menu,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <BarChart3 size={22} /> },
    { id: "admin", label: "Admin Profile", icon: <User size={22} /> },
    { id: "investors", label: "Investors", icon: <Users size={22} /> },
    { id: "cars", label: "Cars", icon: <Car size={22} /> },
  ];

  const [cars, setCars] = useState([
    { model: "Toyota Premio", buying: 700000, selling: 900000, expense: 50000, profit: 150000 },
  ]);

  const [formData, setFormData] = useState({
    model: "",
    buying: "",
    selling: "",
    expense: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddCar = () => {
    const { model, buying, selling, expense } = formData;

    if (!model || !buying || !selling || !expense) return alert("Please fill all fields");

    const profit = parseFloat(selling) - parseFloat(buying) - parseFloat(expense);

    setCars([
      ...cars,
      { model, buying: parseFloat(buying), selling: parseFloat(selling), expense: parseFloat(expense), profit },
    ]);

    setFormData({ model: "", buying: "", selling: "", expense: "" });
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed md:static left-0 top-0 bg-white border-r border-gray-200 shadow-md flex flex-col items-center py-6 space-y-6 transition-all duration-300 h-full z-40 ${
          menuOpen ? "w-16" : "hidden md:flex md:w-16"
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveTab(item.id);
              setMenuOpen(false);
            }}
            className={`p-3 rounded-xl transition ${
              activeTab === item.id
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100 text-gray-600"
            }`}
            title={item.label}
          >
            {item.icon}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Top Navbar */}
        <header className="flex items-center justify-between bg-white shadow px-4 py-3">
          <h1 className="text-xl font-semibold text-gray-800">
            {activeTab === "dashboard"
              ? "Dashboard"
              : activeTab === "admin"
              ? "Admin Profile"
              : activeTab === "investors"
              ? "Investors"
              : "Cars"}
          </h1>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={24} />
          </button>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 md:p-6">
          {activeTab === "dashboard" && (
           <div>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:grid-cols-5">
              <Card>
                <CardHeader>
                  <CardTitle>Total Revenue</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <p className="text-2xl font-semibold">Ksh 250,000</p>
                  <DollarSign className="text-green-600" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Investors</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <p className="text-2xl font-semibold">18</p>
                  <Users className="text-blue-600" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Cars Sold</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <p className="text-2xl font-semibold">9</p>
                  <TrendingUp className="text-purple-600" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Net Profit</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <p className="text-2xl font-semibold">180000</p>
                  <Users className="text-blue-600" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Loans</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <p className="text-2xl font-semibold">50,000</p>
                  <Users className="text-blue-600" />
                </CardContent>
              </Card>
            </div>

            {/* Add Car Form */}
            <Card className="mb-8 mt-6">
              <CardHeader>
                <CardTitle>Add Car Details</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-4 gap-4">
                <input
                  name="model"
                  placeholder="Car Model"
                  value={formData.model}
                  onChange={handleChange}
                  className="border rounded p-2"
                />
                <input
                  name="buying"
                  type="number"
                  placeholder="Buying Price"
                  value={formData.buying}
                  onChange={handleChange}
                  className="border rounded p-2"
                />
                <input
                  name="selling"
                  type="number"
                  placeholder="Selling Price"
                  value={formData.selling}
                  onChange={handleChange}
                  className="border rounded p-2"
                />
                <input
                  name="expense"
                  type="number"
                  placeholder="Expense"
                  value={formData.expense}
                  onChange={handleChange}
                  className="border rounded p-2"
                />
                <Button onClick={handleAddCar} className="md:col-span-4 w-full">
                  Add Car
                </Button>
              </CardContent>
            </Card>
           </div>
          )}

          {/* Admin Profile */}
          {activeTab === "admin" && (
            <Card className="max-w-3xl mx-auto mt-6">
              <CardHeader>
                <CardTitle>Admin Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> admin@carcoop.com</p>
                <p><strong>Role:</strong> Super Administrator</p>
                <p><strong>Phone:</strong> +254 712 345 678</p>
              </CardContent>
            </Card>
          )}

          {/* Investors Tab */}
          {activeTab === "investors" && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Investor Details</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Investment</TableHead>
                      <TableHead>Returns</TableHead>
                      <TableHead>Loans</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Mary W.</TableCell>
                      <TableCell>mary@invest.com</TableCell>
                      <TableCell>Ksh 150,000</TableCell>
                      <TableCell>Ksh 20,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>James K.</TableCell>
                      <TableCell>james@invest.com</TableCell>
                      <TableCell>Ksh 200,000</TableCell>
                      <TableCell>Ksh 35,000</TableCell>
                      <TableCell>Ksh 3,000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}

          {/* Cars Tab */}
          {activeTab === "cars" && (
            <div className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Cars Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Car Model</TableHead>
                        <TableHead>Buying Price</TableHead>
                        <TableHead>Selling Price</TableHead>
                        <TableHead>Expenses</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Profit</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          car: "Toyota Axio",
                          buy: 950000,
                          sell: 1150000,
                          expenses: 30000,
                          date: "2025-03-09",
                        },
                        {
                          car: "Honda Fit",
                          buy: 780000,
                          sell: 890000,
                          expenses: 25000,
                          date: "2025-04-15",
                        },
                        {
                          car: "Nissan Note",
                          buy: 850000,
                          sell: 0,
                          expenses: 20000,
                          date: "2025-05-04",
                        },
                      ].map((item, i) => {
                        const profit =
                          item.sell > 0
                            ? item.sell - item.buy - item.expenses
                            : 0;
                        return (
                          <TableRow key={i}>
                            <TableCell>{item.car}</TableCell>
                            <TableCell>Ksh {item.buy.toLocaleString()}</TableCell>
                            <TableCell>
                              {item.sell > 0 ? `Ksh ${item.sell.toLocaleString()}` : "—"}
                            </TableCell>
                            <TableCell>Ksh {item.expenses.toLocaleString()}</TableCell>
                            <TableCell>{item.date}</TableCell>
                            <TableCell
                              className={
                                profit > 0
                                  ? "text-green-600 font-semibold"
                                  : profit < 0
                                  ? "text-red-600 font-semibold"
                                  : "text-gray-500"
                              }
                            >
                              {item.sell > 0
                                ? `Ksh ${profit.toLocaleString()}`
                                : "Pending"}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
