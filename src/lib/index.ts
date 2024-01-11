import { derived, writable } from "svelte/store";
import NetflixIcon from "$lib/images/netflixIcon.svg";
import NotionIcon from "$lib/images/notion.svg";
import Chrome from "$lib/images/chrome.svg";
import NotepadIcon from "$lib/images/Notepad_Logo.webp";
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
        name: "Svelte Life",
        iconImg: NotepadIcon,
        swapClass: "highliht",
        content: "hello i love svelte"
    },
]);

export let realIcons = derived(allIcons, ($allIcons) => {
    return $allIcons.filter((icon) => icon.name !== "zz");
});