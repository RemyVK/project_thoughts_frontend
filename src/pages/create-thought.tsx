
import './create-thought.css';
export default function CreateThought() {

    return (
        <div className='createmodal'>
            <textarea name="postContent" placeholder={'Enter your thought here'} />
            <button type="submit">Create</button>

        </div >
    );
}
