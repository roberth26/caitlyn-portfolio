import { html } from 'snabbdom-jsx';
import ImagePicker from '../imagepicker/ImagePicker';

export default function ProjectView( props ) {
	const {
		onPrev,
		onNext,
		activeImage,
		project,
		onSelectImage,
		viewportOpen
	} = props;
	let className = 'project__viewport';
	if ( !viewportOpen ) {
		className += ` ${className}--closed`;
	}
	return (
		<article className="project">
			<div className="project__view">
				<div className={className}>
					<img
						className="project__viewport__img"
						src={activeImage ? activeImage.full : ''}
					/>
					<div className="project__viewport__clip-top" />
					<div className="project__viewport__clip-bottom" />
					<button
						className="project__viewport__btn project__viewport__btn--left"
						on-click={onPrev}
					>Previous</button>
					<button 
						className="project__viewport__btn project__viewport__btn--right"
						on-click={onNext}
					>Next</button>
				</div>
				<ImagePicker
					images={project.images}
					onSelect={onSelectImage}
					activeImage={activeImage}
				/>
			</div>
			<div className="project__meta">
				<h2 className="project__title">{project.title}</h2>
				<h3 className="project__date">{project.date}</h3>
				<ul className="project__tools">
					{project.tools.map( ( tool, index ) => (
						<li className="project__tools__item">
							{index < project.tools.length - 1 ? `${tool}, ` : tool}
						</li>
					))}
				</ul>
				<div
					className="project__description"
					innerHTML={project.description}
				></div>
			</div>
		</article>
	);
}