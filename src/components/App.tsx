import styled, { ThemeProvider } from "styled-components";

import { useSettingStore } from "@/misc/store";
import { TextView } from "./TextView";
import { DARK_THEME, LIGHT_THEME } from "@/misc/theme";
import { InputView } from "./InputView";

const Body = styled.div`
  background: ${(p) => p.theme.colors.background.main};
  color: ${(p) => p.theme.colors.text.main};
  height: 100dvh;
`;

function App() {
  // テーマを設定
  const darkFlag = useSettingStore((st) => st.darkFlag);
  const theme = darkFlag ? DARK_THEME : LIGHT_THEME;

  return (
    <ThemeProvider theme={theme}>
      <Body>
        <InputView />
        <TextView />
      </Body>
    </ThemeProvider>
  );
}

export default App;
