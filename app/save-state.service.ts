/**
 * Created by myths on 4/19/17.
 */
import {Injectable} from "@angular/core"
import {State} from "./objects"

@Injectable()
export class SaveStateService {

    private state: State;

    setState(state: State) {
        this.state = state;
    }

    getState(): State {
        return this.state;
    }

}