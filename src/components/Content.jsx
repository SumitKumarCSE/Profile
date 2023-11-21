import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEye, faGem, faHeart, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import sunset from './sunset.jpg';
import profile from './profile.jpg';
import data from '../data';

function Content() {
    function convertToInternationalCurrencySystem (labelValue) {
        return Math.abs(Number(labelValue)) >= 1.0e+9
        ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(1) + "B"
        : Math.abs(Number(labelValue)) >= 1.0e+6
        ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(1) + "M"
        : Math.abs(Number(labelValue)) >= 1.0e+3
        ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(1) + "K"
        : Math.abs(Number(labelValue));
    }
    return (
        <>
            <img src={sunset} alt="backgroundimage" id="backgroundimg" />
            <div id="info">
                <div id="upper">
                    <img src={profile} alt="profileimage" id="profileimg" />
                    <div id="userinfo">
                        <div id="profilename">
                            {data.username}
                            <span id="gem">
                                <FontAwesomeIcon icon={faGem} style={{ color: "#ffffff", }} />
                            </span>
                            <span id="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                        </div>
                        <div id="containfollower">
                            <div class="followers">
                                <button class="number">{data.followers}</button>
                                Followers
                            </div>
                            <div class="followers">
                                <button class="number">{data.following}</button>
                                Following
                            </div>
                        </div>
                    </div>
                </div>
                <div id="lower">
                    {data.designation}
                    <a href="/">{data.instagram}</a>
                    <div id="ratings">
                        <span id="star">
                            <FontAwesomeIcon icon={faStar} style={{ color: "#ffffff", }} />
                        </span>
                        {convertToInternationalCurrencySystem(data.starred)}
                        <span id="thumbsup">
                            <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#ffffff", }} />
                        </span>
                        {convertToInternationalCurrencySystem(data.likes)}
                        <span id="eye">
                            <FontAwesomeIcon icon={faEye} style={{ color: '#ffffff', }} />
                        </span>
                        {convertToInternationalCurrencySystem(data.views)}
                        <span id="heart">
                            <FontAwesomeIcon icon={faHeart} style={{ color: '#ffffff', }} />
                        </span>
                        {convertToInternationalCurrencySystem(data.hearts)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;