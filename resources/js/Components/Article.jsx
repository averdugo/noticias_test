export default function Article(props) {
    const {data} = props;

    const buttonClass = `
    absolute  bottom-3 right-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
    `

    const goToNews = (item)=>  {

        fetch('/visited', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then(resp=>{
            console.log(resp)
        }).catch(error=>{
            console.log(error)
        });
       
        window.open(item.url, '_blank')
    };

    return(
        <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] " style={{height:"440px"}}>
            <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                <img className="rounded-t-lg" src={data.urlToImage} alt="" />
                <a href="#!">
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
            </div>
            <div className="p-6">
                <h5 className="mb-2 text-md font-light leading-tight text-dark-600">
                    {data.title}<br/>
                    <small className="text-dark-300 dark:text-neutral-400 text-xs">{data.publishedAt}</small>
                </h5>
                <p className="mb-4 text-base text-neutral-500">por: <strong>{data.author}</strong></p>
                <button type="button" onClick={()=>goToNews(data)} className={buttonClass} data-te-ripple-init data-te-ripple-color="light"> Ver Mas </button>
            </div>
        </div>
    )
}
