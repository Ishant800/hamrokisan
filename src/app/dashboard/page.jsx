"use client"
import { useState, useEffect } from "react";
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  Calendar, 
  Bell, 
  Settings, 
  Menu, 
  X,
  FileText,
  BarChart3,
  Stethoscope,
  Building
} from "lucide-react";
import { useRouter } from "next/navigation";

// Main Dashboard Layout Component
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "doctors", label: "Doctors", icon: Stethoscope },
    { id: "patients", label: "Patients", icon: Users },
    { id: "appointments", label: "Appointments", icon: Calendar },
    { id: "staff", label: "Staff", icon: UserCheck },
    { id: "departments", label: "Departments", icon: Building },
    { id: "reports", label: "Reports", icon: BarChart3 },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
     
      {sidebarOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      
      <div className={`
        fixed md:relative z-30 w-64 bg-gradient-to-b from-emerald-600 to-emerald-700 text-white
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <div className="flex flex-col h-full">
         
          <div className="p-6 border-b border-emerald-500">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Stethoscope className="text-emerald-600" size={24} />
              </div>
              <div className="cursor">
                <h1  className="text-xl font-bold"> MediCare</h1>
                <p className="text-emerald-200 text-sm">Admin Panel</p>
              </div>
            </div>
          </div>

          
          <nav className="flex-1 p-4 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    if (isMobile) setSidebarOpen(false);
                  }}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200
                    ${activeTab === item.id 
                      ? 'bg-white text-emerald-700 shadow-lg' 
                      : 'text-emerald-100 hover:bg-emerald-500 hover:text-white'
                    }
                  `}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

         
          <div className="p-4 border-t border-emerald-500">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-400 rounded-full flex items-center justify-center">
                <span className="font-bold text-white">A</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">Admin User</p>
                <p className="text-emerald-200 text-xs truncate">admin@medicare.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex-1 flex flex-col overflow-hidden">
        
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors md:hidden"
              >
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              <h1 className="text-2xl font-bold text-gray-800 capitalize">
                {activeTab.replace(/([A-Z])/g, ' $1').trim()}
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">A</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6 bg-gray-50">
          <DashboardContent activeTab={activeTab} />
        </main>
      </div>
    </div>
  );
}

// Main Content Component
function DashboardContent({ activeTab }) {
  switch (activeTab) {
    case "dashboard":
      return <DashboardOverview />;
    case "doctors":
      return <DoctorsManagement />;
    case "patients":
      return <PatientsManagement />;
    case "appointments":
      return <AppointmentsManagement />;
    case "staff":
      return <StaffManagement />;
    case "departments":
      return <DepartmentsManagement />;
    case "reports":
      return <ReportsAnalytics />;
    case "notifications":
      return <NotificationsCenter />;
    case "settings":
      return <SettingsPanel />;
    default:
      return <DashboardOverview />;
  }
}

// Dashboard Overview Component
function DashboardOverview() {
  const stats = [
    { label: "Total Patients", value: "1,234", change: "+12%", icon: Users, color: "emerald" },
    { label: "Active Doctors", value: "48", change: "+5%", icon: Stethoscope, color: "blue" },
    { label: "Appointments", value: "89", change: "+23%", icon: Calendar, color: "purple" },
    { label: "Revenue", value: "$12,456", change: "+18%", icon: BarChart3, color: "orange" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className={`text-sm font-medium text-${stat.color}-600 mt-1`}>{stat.change}</p>
                </div>
                <div className={`p-3 rounded-xl bg-${stat.color}-100`}>
                  <Icon className={`text-${stat.color}-600`} size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Users className="text-emerald-600" size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">New patient registration</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors group">
              <UserCheck className="text-emerald-600 mb-2 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-sm font-medium text-gray-900">Add Doctor</p>
            </button>
            <button className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group">
              <Users className="text-blue-600 mb-2 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-sm font-medium text-gray-900">Add Patient</p>
            </button>
            <button className="p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors group">
              <Calendar className="text-purple-600 mb-2 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-sm font-medium text-gray-900">Schedule</p>
            </button>
            <button className="p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors group">
              <FileText className="text-orange-600 mb-2 group-hover:scale-110 transition-transform" size={24} />
              <p className="text-sm font-medium text-gray-900">Reports</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

