import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign, Car, Users, TrendingUp, User, BarChart3 } from "lucide-react";

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-10">
      {/* Header */}
      <header className="flex justify-between items-center mb-10 border-b pb-4">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">Car Investment Admin Panel</h1>
        <div className="flex items-center gap-3 bg-white shadow px-4 py-2 rounded-xl">
          <User className="w-7 h-7 text-gray-600" />
          <span className="font-semibold text-gray-700">Admin Profile</span>
        </div>
      </header>

      {/* Stats Overview */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[{
          title: 'Total Profit', icon: <DollarSign className="text-green-500" />, value: 'Ksh 2,450,000'
        }, {
          title: 'Cars Sold', icon: <Car className="text-blue-500" />, value: '37'
        }, {
          title: 'Total Investors', icon: <Users className="text-purple-500" />, value: '128'
        }, {
          title: 'Active Loans', icon: <TrendingUp className="text-red-500" />, value: '12'
        }].map((stat, i) => (
          <Card key={i} className="shadow-lg hover:shadow-xl transition-all border border-gray-200 rounded-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-gray-700 font-semibold">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-extrabold text-gray-900">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Car Management */}
      <section className="grid md:grid-cols-2 gap-8 mb-10">
        <Card className="shadow-md border border-gray-200 rounded-2xl">
          <CardHeader>
            <CardTitle className="font-bold text-gray-800">Record Car Transaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-5">
              <Input placeholder="Car Name / Model" className="rounded-xl" />
              <Input placeholder="Buying Price (Ksh)" type="number" className="rounded-xl" />
              <Input placeholder="Selling Price (Ksh)" type="number" className="rounded-xl" />
              <Input placeholder="Expenses (Ksh)" type="number" className="rounded-xl" />
              <Button className="bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold">Submit</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md border border-gray-200 rounded-2xl">
          <CardHeader>
            <CardTitle className="font-bold text-gray-800">Investment Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Total Investments</p>
                <p className="text-xl font-bold">Ksh 8,950,000</p>
              </div>
              <div>
                <p className="text-gray-600">Pending Loans</p>
                <p className="text-xl font-bold text-red-600">Ksh 540,000</p>
              </div>
            </div>
            <div className="mt-5 flex gap-3">
              <Button variant="outline" className="rounded-xl border-gray-300">View Details</Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white rounded-xl">Export CSV</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tables */}
      <section className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg border border-gray-200 rounded-2xl">
          <CardHeader>
            <CardTitle className="font-bold text-gray-800">Recently Sold Cars</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Car</TableHead>
                  <TableHead>Buying Price</TableHead>
                  <TableHead>Selling Price</TableHead>
                  <TableHead>Profit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[{
                  car: 'Toyota Prado', buy: 2800000, sell: 3200000, profit: 400000
                }, {
                  car: 'Mazda Demio', buy: 800000, sell: 950000, profit: 150000
                }].map((item, i) => (
                  <TableRow key={i}>
                    <TableCell>{item.car}</TableCell>
                    <TableCell>Ksh {item.buy.toLocaleString()}</TableCell>
                    <TableCell>Ksh {item.sell.toLocaleString()}</TableCell>
                    <TableCell className="text-green-600 font-semibold">Ksh {item.profit.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="shadow-lg border border-gray-200 rounded-2xl">
          <CardHeader>
            <CardTitle className="font-bold text-gray-800">Investors & Loans</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Investment</TableHead>
                  <TableHead>Loan</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[{
                  name: 'John Mwangi', invest: 500000, loan: 0
                }, {
                  name: 'Grace Achieng', invest: 300000, loan: 80000
                }].map((user, i) => (
                  <TableRow key={i}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>Ksh {user.invest.toLocaleString()}</TableCell>
                    <TableCell className={user.loan ? 'text-red-600 font-semibold' : 'text-green-600 font-semibold'}>
                      {user.loan ? `Ksh ${user.loan.toLocaleString()}` : 'No Loan'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default AdminDashboard;
