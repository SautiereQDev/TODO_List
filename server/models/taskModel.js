import mongoose, {Schema} from "mongoose";


const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    },
    tag: {
        type: String,
        default: 'General',
    }
}, {timestamps: true});

const Task = mongoose.model('Task', taskSchema);
export default Task;