import { Card } from './index.js';

export default function Project ({img, title, description, techs}) {
    return (
        <Card className='w-3/5'>
            <img className='rounded' src={img}></img>
            <h1 className="pb-1 text-xl text-center font-bold">{title}</h1>
            <h2 className="pb-2 text-base font-bold">Tecnologías: {techs.join(', ')}</h2>
            <div className="text-sm">{description}</div>
        </Card>
    )
}
