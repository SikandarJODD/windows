import { derived, writable } from "svelte/store";
import NetflixIcon from "$lib/images/netflixIcon.svg";
import NotionIcon from "$lib/images/notion.svg";
import Chrome from "$lib/images/chrome.svg";
import NotepadIcon from "$lib/images/Notepad_Logo.webp";
import folderIcon from '$lib/images/folder.svg'
import windowsBg from "$lib/images/peakpx.jpg";
import windowsBg2 from "$lib/images/bg2.jpg"
import windowbg3 from '$lib/images/w5.jpg'
import windowbg6 from '$lib/images/w6.jpg'

import vs2code from '$lib/images/vs2code.svg'
import Brave from '$lib/images/brave.svg';
import Chrome2 from '$lib/images/chrome2.svg';


export let allIcons = writable([
    {
        id: 1,
        name: "Netflix",
        iconImg: NetflixIcon,
        swapClass: "highliht",
        content: "",
        isopen: false,
    },
    {
        id: 2,
        name: "notion",
        iconImg: NotionIcon,
        swapClass: "highliht",
        content: "",
        isopen: false,
    },
    {
        id: 3,
        name: "Chrome",
        iconImg: Chrome,
        swapClass: "highliht",
        content: "",
        isopen: false,
    },
    {
        id: 4,
        name: "Svelte",
        iconImg: NotepadIcon,
        swapClass: "highliht",
        content: "hello i love svelte",
        isopen: false,
    },
]);

export let realIcons = derived(allIcons, ($allIcons) => {
    return $allIcons.filter((icon) => icon.name !== "zz");
});


export let sizeIcon = writable(10);
export let showDesktopIcon = writable(true);

export let bg_image = writable(0);

export let bgs = [
    {
        id: 0,
        img: windowsBg,
    },
    {
        id: 1,
        img: windowsBg,
    },
    {
        id: 2,
        img: windowsBg2,
    },
    {
        id: 3,
        img: windowbg6,
    },

]


export let bottomApps = writable([
    {
        id: 0,
        name: 'folder',
        icon: folderIcon,
        content: '',
        isopen: true,
        swapClass: 'highliht'
    },
    {
        id: 2,
        name: 'vs code',
        icon: vs2code,
        content: '',
        isopen: true,
        swapClass: 'highliht'
    },
    {
        id: 3,
        name: 'chrome',
        icon: Chrome2,
        content: '',
        isopen: true,
        swapClass: 'highliht'
    },
    {
        id: 4,
        name: 'brave',
        icon: Brave,
        content: '',
        isopen: true,
        swapClass: 'highliht'
    },

]);