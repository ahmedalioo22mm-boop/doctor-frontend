"use client"; 

import React, { useEffect, useState } from 'react';

function Departments() {
    const [departments, setDepartments] = useState([]);
    const [activeTab, setActiveTab] = useState(null);

    useEffect(() => {
        // 2. تم تصحيح عنوان URL إلى http
        fetch("http://localhost:5000/departments/allDepartments")
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch departments');
                }
                return res.json();
            })
            .then((data) => {
                setDepartments(data);
           
                if (data && data.length > 0) {
                    setActiveTab(data[0]._id);
                }
            })
            .catch((err) => console.error("Failed to fetch departments:", err));
    }, []); 

    const handleTabClick = (id) => {
        setActiveTab(id);
    };

    // البحث عن تفاصيل القسم النشط لعرضها
    const activeDepartment = departments.find(dep => dep._id === activeTab);

    return (
        <section className="py-12 bg-white max-w-6xl mx-auto px-4">
            <div className='mb-8 text-center'>
                <h2 className="text-3xl font-bold mb-2">Departments</h2>
                <p className="text-gray-600 max-w-xl mx-auto">
                    Explore our specialized medical departments staffed with expert doctors.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* قائمة الأقسام (Tabs) */}
                <ul className='flex md:flex-col md:w-1/4 space-y-2 border-b md:border-b-0 md:border-r border-gray-200 pr-4'>
                    {/* 4. تم إصلاح دالة map بإضافة الأقواس () للإرجاع */}
                    {departments.map((dep) => (
                        <li key={dep._id}>
                            <button
                                onClick={() => handleTabClick(dep._id)}
                                // 5. تم إصلاح اسم الكلاس وإضافة اسم القسم
                                className={`w-full text-left block px-4 py-3 rounded-md transition-colors ${
                                    activeTab === dep._id
                                        ? "bg-[#008e9b] text-white" // تم تصحيح اللون
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                {dep.name} {/* 6. تم عرض اسم القسم */}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* 7. منطقة عرض محتوى القسم النشط */}
                <div className="md:w-3/4">
                    {activeDepartment ? (
                        <div>
                            <h3 className="text-2xl font-bold mb-4">{activeDepartment.name}</h3>
                            {activeDepartment.image && (
                                <img 
                                    src={`http://localhost:5000/files/${activeDepartment.image}`} 
                                    alt={activeDepartment.name} 
                                    className="w-full h-64 object-cover rounded-lg mb-4"
                                />
                            )}
                            <p className="text-gray-700 whitespace-pre-line">{activeDepartment.description}</p>
                        </div>
                    ) : (
                        <p>Loading departments or select one to see the details.</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Departments;