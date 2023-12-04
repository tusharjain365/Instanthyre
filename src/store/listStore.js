import {create} from 'zustand'
import {jobs} from '../util/jobs';

export const listStore=create((set)=> ({
    jobs:jobs,
    remove: (id)=>set((state)=> ({jobs:state.jobs.filter(item=> item.id!=id)}))
}))