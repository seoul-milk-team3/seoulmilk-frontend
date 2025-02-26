import fs from "fs";
import path from "path";

// `src` 디렉토리의 경로
const srcPath = path.resolve(__dirname, "../src");
const indexPath = path.join(srcPath, "index.ts");

// 제외할 폴더 또는 파일 설정
const exclude = ["index.ts", "types", "styles"];

const components = fs
  .readdirSync(srcPath)
  .filter(
    (name) =>
      !exclude.includes(name) &&
      fs.statSync(path.join(srcPath, name)).isDirectory()
  )
  .map((name) => `export * from "./${name}/${name}";`);

fs.writeFileSync(indexPath, components.join("\n") + "\n", "utf-8");

console.log("✅ src/index.ts 자동 생성 완료!");
