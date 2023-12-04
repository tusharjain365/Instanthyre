import {create} from 'zustand';

export const authStore=create((set)=> ({
    loading:true,
    user:null,
    setUser: (curUser)=> set({user:curUser, loading:false})
}))