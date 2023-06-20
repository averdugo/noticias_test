import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Article from "@/Components/Article"
import { Head } from '@inertiajs/react';
import React, {useState, useEffect} from "react";

export default function Dashboard({data}) {
    const [news, setNews] = useState(data)
    
    console.log(data)
    
    
    return (
        <AuthenticatedLayout header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Noticias</h2>}
        >
            <Head title="Mas Visitadas" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                        <h2 className="mb-5 text-3xl font-semibold">Noticias Mas Visitadas</h2>

                            <div className="grid grid-cols-3 gap-8">
                                {
                                    news.map((a, i)=>(
                                        <Article key={`articule${i}`} data={a}/>
                                    ))
                                }
    
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
