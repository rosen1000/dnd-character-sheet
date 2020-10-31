import * as jimp from "jimp";
import { Character } from "./Character";
import { join } from "path";
import Jimp = require("jimp");

export function generate(character: Character) {
    jimp.read(join(__dirname, "..", "template.png"), async (_, image) => {
        const fontTitle = await jimp.loadFont(jimp.FONT_SANS_64_BLACK);
        const font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK);
        const fontSmall = await jimp.loadFont(jimp.FONT_SANS_16_BLACK);

        // Top bar info 700 200
        image.print(fontTitle, 130, 145, character.name);
        image.print(font, 700, 128, character.class + " " + character.level);
        image.print(
            font,
            1460 - jimp.measureText(font, character.playerName),
            128,
            character.playerName
        );
        image.print(font, 700, 198, character.race);
        image.print(
            font,
            1150 - jimp.measureText(font, character.alignment) / 2,
            198,
            character.alignment
        );
        image.print(
            font,
            1380 - jimp.measureText(font, character.xp.toString()) / 2,
            198,
            character.xp
        );
        image.print(
            font,
            165 - jimp.measureText(font, character.proficiency.toString()) / 2,
            328,
            character.proficiency
        );
        if (character.inspiration)
            image.print(font, 167 - jimp.measureText(font, "O") / 2, 400, "O");

        // Basic Stats
        image.print(
            fontTitle,
            1096 - jimp.measureText(fontTitle, character.armorClass.toString()) / 2,
            323,
            character.armorClass
        );
        image.print(
            fontTitle,
            1235 - jimp.measureText(fontTitle, character.initiative.toString()) / 2,
            330,
            character.initiative
        );
        image.print(
            fontTitle,
            1420 - jimp.measureText(fontTitle, character.speed.toString()) / 2,
            330,
            character.speed
        );

        // Stat values
        let height = 487;
        image.print(
            fontSmall,
            165 - jimp.measureText(fontSmall, character.stats.strength.value.toString()) / 2,
            height,
            character.stats.strength.value
        );
        height += 176;
        image.print(
            fontSmall,
            165 - jimp.measureText(fontSmall, character.stats.dexterity.value.toString()) / 2,
            height,
            character.stats.dexterity.value
        );
        height += 176;
        image.print(
            fontSmall,
            165 - jimp.measureText(fontSmall, character.stats.constitution.value.toString()) / 2,
            height,
            character.stats.constitution.value
        );
        height += 176;
        image.print(
            fontSmall,
            165 - jimp.measureText(fontSmall, character.stats.intelligence.value.toString()) / 2,
            height,
            character.stats.intelligence.value
        );
        height += 176;
        image.print(
            fontSmall,
            165 - jimp.measureText(fontSmall, character.stats.wisdom.value.toString()) / 2,
            height,
            character.stats.wisdom.value
        );
        height += 176;
        image.print(
            fontSmall,
            165 - jimp.measureText(fontSmall, character.stats.charisma.value.toString()) / 2,
            height,
            character.stats.charisma.value
        );

        // Stat mods
        height = 535;
        image.print(
            font,
            165 - jimp.measureText(font, character.stats.strength.toStringMod()) / 2,
            height,
            character.stats.strength.toStringMod()
        );
        height += 176;
        image.print(
            font,
            165 - jimp.measureText(font, character.stats.dexterity.toStringMod()) / 2,
            height,
            character.stats.dexterity.toStringMod()
        );
        height += 176;
        image.print(
            font,
            165 - jimp.measureText(font, character.stats.constitution.toStringMod()) / 2,
            height,
            character.stats.constitution.toStringMod()
        );
        height += 176;
        image.print(
            font,
            165 - jimp.measureText(font, character.stats.intelligence.toStringMod()) / 2,
            height,
            character.stats.intelligence.toStringMod()
        );
        height += 176;
        image.print(
            font,
            165 - jimp.measureText(font, character.stats.wisdom.toStringMod()) / 2,
            height,
            character.stats.wisdom.toStringMod()
        );
        height += 176;
        image.print(
            font,
            165 - jimp.measureText(font, character.stats.charisma.toStringMod()) / 2,
            height,
            character.stats.charisma.toStringMod()
        );
        height += 176;

        // Saving Throws
        let square = new jimp(40, 40, "black").scale(0.5).rotate(45);
        image.composite(square, 10, 10);

        // Passive wisdom
        image.print(
            font,
            166 - jimp.measureText(font, character.passivePerception.toString()) / 2,
            1530,
            character.passivePerception
        );

        // TODO: proficiency marker
        // let circle = new jimp(20, 20, "black");
        // circle.circle({ radius: 8, x: 10, y: 10 });
        // image.composite(circle, 10, 10);

        // Avatar
        // TODO: Center better the images or use 430x430
        let avatar = await jimp.read(join(__dirname, "..", "avatar.png"));
        avatar.crop(avatar.getWidth() / 8, 40, 435, 460);
        image.composite(avatar, 570, 325);

        // HP Stats
        image.print(
            font,
            865 - jimp.measureText(font, character.maxHp.toString()) / 2,
            833,
            character.maxHp
        );
        image.print(
            fontTitle,
            680 - jimp.measureText(fontTitle, character.hitDice.toString()) / 2,
            1010,
            character.hitDice.toString()
        );
        let saveCircle = new jimp(30, 30, "black").circle({ radius: 11.5, x: 15, y: 15 });
        for (let i = 0; i < (character.saves.successes > 3 ? 3 : character.saves.successes); i++) {
            image.composite(saveCircle, 889 + 33 * i, 990);
        }
        for (let i = 0; i < (character.saves.failures > 3 ? 3 : character.saves.failures); i++) {
            image.composite(saveCircle, 889.5 + 33 * i, 1029);
        }

        image.normalize();
        image.write("out.png");
    });
}
