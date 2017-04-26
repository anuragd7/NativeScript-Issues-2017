import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import * as imageSourceModule from "image-source";
import * as enums from "ui/enums";
import * as fs from "file-system";

declare var android: any;

export function navigatingTo(args: EventData) {

    let page = <Page>args.object;

    var folderPath = android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DOWNLOADS).toString();
    console.log("folderPath; " + folderPath)

    var documents = fs.knownFolders.documents();
    console.log("documents: " + documents);

    var fileName = 'img_' + new Date().getTime() + '.png';
    console.log("fileName: " + fileName);

    var path = fs.path.join(documents.path, fileName);
    console.log("path: " + path);

    var img = imageSourceModule.fromResource("icon");
    console.log("img: " + img);

    var exists = fs.File.exists(path);
    console.log(exists);

    if (!exists) {
        var saved = img.saveToFile(path, enums.ImageFormat.png);
        console.log(saved);
    }
}