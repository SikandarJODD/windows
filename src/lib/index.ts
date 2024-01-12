import { derived, writable } from "svelte/store";
import NetflixIcon from "$lib/images/netflixIcon.svg";
import NotionIcon from "$lib/images/notion.svg";
import Chrome from "$lib/images/chrome.svg";
import NotepadIcon from "$lib/images/Notepad_Logo.webp";
import windowsBg from "$lib/images/peakpx.jpg";
import windowsBg2 from "$lib/images/bg2.jpg"
import windowbg3 from '$lib/images/w5.jpg'
import windowbg6 from '$lib/images/w6.jpg'

export let allIcons = writable([
    {
        id: 1,
        name: "Netflix",
        iconImg: NetflixIcon,
        swapClass: "highliht",
        content: ""
    },
    {
        id: 2,
        name: "notion",
        iconImg: NotionIcon,
        swapClass: "highliht",
        content: ""
    },
    {
        id: 3,
        name: "Chrome",
        iconImg: Chrome,
        swapClass: "highliht",
        content: ""
    },
    {
        id: 4,
        name: "Svelte",
        iconImg: NotepadIcon,
        swapClass: "highliht",
        content: "hello i love svelte"
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