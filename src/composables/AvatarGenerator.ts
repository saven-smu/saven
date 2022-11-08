import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/open-peeps";

export default function getAvatar(id: string) {
    return createAvatar(style, {
        seed: id,
    });
}
