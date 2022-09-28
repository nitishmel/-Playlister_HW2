import React, { Component } from 'react';

export default class DeleteSongModal extends Component {
    render() {
        const { SONG, deleteSongCallback, hideDeleteSongModalCallback } = this.props;
        let name = "Untitled";

        if (SONG != null){
            name = SONG.title
        }
        return (
            <div class="modal" id="delete-song-modal" data-animation="slideInOutLeft">
            <div class="modal-root" id='verify-delete-song-root'>
                <div class="modal-north">
                    Delete song?
                </div>                
                <div class="modal-center">
                    <div class="modal-center-content">
                        Are you sure you wish to permanently remove {' '}
                                <span style={{ fontWeight: 'bold'}}>{name}</span> from the playlist?
                    </div>
                </div>
                <div class="modal-south">
                    <input type="button" id="delete-song-confirm-button" class="modal-button" value='Confirm' onClick={deleteSongCallback} />
                    <input type="button" id="delete-song-cancel-button" class="modal-button" value='Cancel' onClick={hideDeleteSongModalCallback}/>
                </div>
            </div>
        </div>
        );
    }
}