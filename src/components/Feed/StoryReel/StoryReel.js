import React from 'react';
import './StoryReel.css';
import Story from "./Story/Story";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://images.unsplash.com/photo-1607748877445-23f3265d0268?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
                profileSrc="https://randomuser.me/api/portraits/men/30.jpg"
                title="Ijsbrand Verdam"
            />
            <Story
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
                profileSrc="https://randomuser.me/api/portraits/women/69.jpg"
                title="Isabella Tremblay"
            />
            <Story
                image="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                profileSrc="https://randomuser.me/api/portraits/men/50.jpg"
                title="Andres Moreira"
            />
            <Story
                image="https://images.unsplash.com/photo-1522098635833-216c03d81fbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
                profileSrc="https://randomuser.me/api/portraits/women/40.jpg"
                title="Danya Wilting"
            />
            <Story
                image="https://images.unsplash.com/photo-1507114845806-0347f6150324?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
                profileSrc="https://randomuser.me/api/portraits/women/79.jpg"
                title="Sofia Brown"
            />
        </div>
    );
}

export default StoryReel;