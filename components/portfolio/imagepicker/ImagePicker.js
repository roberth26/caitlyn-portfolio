import { html } from 'snabbdom-jsx';

export default function ImagePicker( props ) {
	const {
		images,
		activeImage,
		onSelect
	} = props;
	return (
		<ul className="image-picker">
			{images.map( ( image, index ) => {
				let className = 'image-picker__item';
				if ( activeImage && activeImage.id == image.id ) {
					className += ` ${className}--active`;
				}
				return (
					<li
						className={className}
						key={image.id}
					>
						<a
							className="image-picker__item__link"
							href="#"
							on-click={ event => {
								event.preventDefault();
								onSelect( image );
							}}
						>
							<img
								className="image-picker__item__img"
								src={image.thumbnail}
							/>
						</a>
					</li>
				);
			})}
		</ul>
	);
}