import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Article from "@/Components/Article"
import { Head } from '@inertiajs/react';
import React, {useState, useEffect} from "react";

export default function Dashboard(props) {
    const [news, setNews] = useState([])
    const [filters, setFilters] = useState([])
    const token = import.meta.env.VITE_NEWS_API_TOKEN

    const saveData = async (data)=>{
        const rawResponse = await fetch('/news', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const content = await rawResponse.json();

        console.log(content);
    }

    const getData = ()=>{
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey='+token)
            .then(response => response.json())
            .then(data => {
                setNews(data.articles)
                setFilters(data.articles)
                saveData(data.articles)
            });
    }

    const filterNews = (e)=>{
        const search = e.target.value
        const filteredList = news.filter(n=> {
            return n.title.toLowerCase().includes(search.toLowerCase())
        });

        setFilters(filteredList)
        
    }

    useEffect(()=>{
        getData()
    },[])

    
    return (
        <AuthenticatedLayout header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Noticias</h2>}
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                        <h2 className="mb-5 text-3xl font-semibold">Titulares Principales</h2>
                            <div className="flex">
            
                                <div className="relative w-full">
                                    <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-black-900 bg-gray-50 rounded-l-lg rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:border-blue-500" placeholder="Buscar" required onChange={(e)=>filterNews(e)} />
                                    <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                                </div>
                            </div>
                            <br/>
                            <div className="grid grid-cols-3 gap-8">
                                {
                                    filters.map((a, i)=>(
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
