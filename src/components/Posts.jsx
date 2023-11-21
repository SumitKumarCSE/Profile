import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../data";

import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
function Posts() {
    return (
        <div>
            <header id="postheader">
                <div id="right">
                    {data.posts.length} Posts
                </div>
                <div id="left"></div>
            </header>
            <div id="allposts">
                {data.posts.map((item, index) => (
                    <div id="posts" key={index}>
                        <div id="posttitle">
                            {item.postHeading}
                            <span id="thumbsup">
                                <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#ffffff", }} />
                            </span>
                        </div>
                        <div id="postcontent" dangerouslySetInnerHTML={{ __html: item.content }} />
                        <div id="footer">
                            <div id="innerfooter">
                                <div id="type">{item.type} </div>
                                by {data.username}
                            </div>
                            <div>
                                {item.date} . {item.timeRead} mins Read . {item.views} Views
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Posts;