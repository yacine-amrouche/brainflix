import './CommentsForm.scss';
import avatar from '../../Assets/Images/Mohan-muruge.jpg';
import plus from '../../Assets/Icons/add_comment.svg';

function CommentsForm(){
    let commentNumber = 3;
    return(
        <section className='form_section'>
            <h2 className='form__number'>{commentNumber} Comments </h2>
            <form className='form'>
                <div className='form__contianer-img'>
                    <img src={avatar} className='form__img' alt='user__img'></img>
                </div>
                <div className='form__container'>
                        <div className='form__container-input'>
                            <p className='form__heading'>JOIN THE CONVERSATION</p>
                            <textarea className='form__input'placeholder='Add a new comment'>
                            </textarea>
                        </div>
                   
                    <button className='form__button'>
                        <img src={plus} alt='user plus' className='btn--img'></img>
                    COMMENT
                    </button>
                </div>
            </form>
        </section>
        
    );

}
export default CommentsForm;