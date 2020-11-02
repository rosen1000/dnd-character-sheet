import * as jimp from "jimp";
import { Character } from "./Character";
import { join } from "path";
import Jimp = require("jimp");
import { GenerateSettings, StatShort } from "./@types";

export function generate(character: Character, settings: GenerateSettings = {}) {
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
            165 - jimp.measureText(fontSmall, character.stats.strength.toString()) / 2,
            height,
            character.stats.strength
        );
        height += 176;
        image.print(
            fontSmall,
            165 - jimp.measureText(fontSmall, character.stats.dexterity.toString()) / 2,
            height,
            character.stats.dexterity
        );
        height += 176;
        image.print(
            fontSmall,
            165 - jimp.measureText(fontSmall, character.stats.constitution.toString()) / 2,
            height,
            character.stats.constitution
        );
        height += 176;
        image.print(
            fontSmall,
            165 - jimp.measureText(fontSmall, character.stats.intelligence.toString()) / 2,
            height,
            character.stats.intelligence
        );
        height += 176;
        image.print(
            fontSmall,
            165 - jimp.measureText(fontSmall, character.stats.wisdom.toString()) / 2,
            height,
            character.stats.wisdom
        );
        height += 176;
        image.print(
            fontSmall,
            165 - jimp.measureText(fontSmall, character.stats.charisma.toString()) / 2,
            height,
            character.stats.charisma
        );

        // Stat mods
        height = 535;
        image.print(
            font,
            165 - jimp.measureText(font, character.stats.modString("str")) / 2,
            height,
            character.stats.modString("str")
        );
        height += 176;
        image.print(
            font,
            165 - jimp.measureText(font, character.stats.modString("dex")) / 2,
            height,
            character.stats.modString("dex")
        );
        height += 176;
        image.print(
            font,
            165 - jimp.measureText(font, character.stats.modString("con")) / 2,
            height,
            character.stats.modString("con")
        );
        height += 176;
        image.print(
            font,
            165 - jimp.measureText(font, character.stats.modString("int")) / 2,
            height,
            character.stats.modString("int")
        );
        height += 176;
        image.print(
            font,
            165 - jimp.measureText(font, character.stats.modString("wis")) / 2,
            height,
            character.stats.modString("wis")
        );
        height += 176;
        image.print(
            font,
            165 - jimp.measureText(font, character.stats.modString("cha")) / 2,
            height,
            character.stats.modString("cha")
        );
        height += 176;

        // Skills
        let saves = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];
        let savesShort: Array<StatShort> = ["str", "dex", "con", "int", "wis", "cha"];
        let skills = [
            ["Athletics"],
            ["Acrobatics", "Sleigth of Hand", "Stealth"],
            [],
            ["Arcana", "History", "Investigation", "Narture", "Religion"],
            ["Animal Handling", "Insight", "Medicine", "Perception", "Survival"],
            ["Deception", "Intimidation", "Performance", "Persuation"],
        ];
        let saveThrow = [265.5, 474];
        let tabSize = 650.5 - saveThrow[1];
        let circleSize = 499 - saveThrow[1];
        for (let i = 0; i < 6; i++) {
            image.print(
                fontSmall,
                saveThrow[0] + 34 + (character.stats.mod(savesShort[i]) == 0 ? 3 : 0),
                saveThrow[1] + tabSize * i + 6,
                character.stats.mod(savesShort[i]) > 0
                    ? "+" + (character.stats.mod(savesShort[i]) + character.proficiency)
                    : character.stats.mod(savesShort[i]) + character.proficiency
            );
            if (saves.includes(character.savingThrows[i])) {
                image.print(font, saveThrow[0], saveThrow[1] + tabSize * i, "+");
            }
        }
        let circle = new jimp(20, 20, "black").circle({ radius: 8.5, x: 9, y: 9 });
        for (let i = 0; i < skills.length; i++) {
            for (let j = 0; j < skills[i].length; j++) {
                if (character.skills.includes(skills[i][j])) {
                    image.composite(
                        circle,
                        saveThrow[0],
                        saveThrow[1] + tabSize * i + circleSize * (j + 1) + 8
                    );
                    image.print(
                        fontSmall,
                        saveThrow[0] + 34 + (character.stats.mod(savesShort[i]) == 0 ? 3 : 0),
                        saveThrow[1] + tabSize * i + circleSize * j + 30,
                        character.stats.mod(savesShort[i]) > 0
                            ? "+" + (character.stats.mod(savesShort[i]) + character.proficiency)
                            : character.stats.mod(savesShort[i]) + character.proficiency
                    );
                    continue;
                }
                image.print(
                    fontSmall,
                    saveThrow[0] + 34 + (character.stats.mod(savesShort[i]) == 0 ? 3 : 0),
                    saveThrow[1] + tabSize * i + circleSize * j + 30,
                    character.stats.modString(savesShort[i])
                );
            }
        }

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

        image.print(fontTitle, 883, 1158, character.spellSaveDC);
        image.print(fontTitle, 903, 1278, character.spellBonus)

        image.normalize();
        image.write("out.png");
    });
}
