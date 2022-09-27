import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * AddSong_Transaction
 * 
 * This class represents a transaction that works with adding
 * a song. It will be managed by the transaction stack.
 * 
 * @author Nitish Meloottu
 */
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initModel) {
        super();
        this.app = initModel;
    }

    doTransaction() {
        this.app.add();
    }
    
    undoTransaction() {
        let len = this.app.getPlaylistSize();
        this.app.delete(len - 1);
    }
}