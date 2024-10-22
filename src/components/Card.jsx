import ButtonInfo from './ButtonInfo';

export default function Card({ image, imgtext, title }) {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt={imgtext} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                    <ButtonInfo />
                </div>
            </div>
        </div>
    );
}
