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
			<button on-click={onPrev}>Previous</button>
			<button on-click={onNext}>Next</button>
			<div className={className}>
				<img src={activeImage ? activeImage.full : ''} />
				<div className="project__viewport__clip-top" />
				<div className="project__viewport__clip-bottom" />
			</div>
			<ImagePicker
				images={project.images}
				onSelect={onSelectImage}
				activeImage={activeImage}
			/>
			<h2>{project.title}</h2>
			<h3>{project.date}</h3>
			<div className="project__tools">
				{project.tools.join( ' ' )}
			</div>
			<div className="project__description">
				{project.description}
			</div>
		</article>
	);
}