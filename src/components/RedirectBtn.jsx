export default function RedirectBtn (redirection) {
    return (
        <a className='p-2 gap-3 bg-cyan-950 text-slate-100 border border-slate-100 rounded flex justify-center items-center' href={redirection.link} target="_blank">
            {redirection.to}
        </a>
    )
}
