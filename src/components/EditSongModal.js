import React, { Component } from 'react';

export default class DeleteSongModal extends Component {
    render() {
        const {EditSongCallback, hideEditSongModalCallback } = this.props;
    
        return (
            <div class="modal" id="edit-song-modal" data-animation="slideInOutLeft">
            <div class="modal-root" id='verify-edit-song-root'>
                <div class="modal-north">
                    Edit Song
                </div>                
                <div class="modal-center">
                    <div class="modal-center-content">
                        Title: <input type="text" id="Title"></input><br></br>
                        Artist: <input type="text" id="Artist"></input><br></br>
                        YouTubeID: <input type="text" id="youTubeId"></input>
                    </div>
                </div>
                <div class="modal-south">
                    <input type="button" id="edit-song-confirm-button" class="modal-button" value='Confirm' onClick={EditSongCallback} />
                    <input type="button" id="edit-song-cancel-button" class="modal-button" value='Cancel' onClick={hideEditSongModalCallback}/>
                </div>
            </div>
        </div>
        );
    }
}