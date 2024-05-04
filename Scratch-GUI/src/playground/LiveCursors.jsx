// LiveCursors.jsx
import { useMemo, useRef, useEffect } from "react";
import { useMembers, useSpace } from "@ably/spaces/react";
import { mockNames } from "../utils/mockNames.js";
import { colours } from "../utils/helpers.js";
import { MemberCursors, YourCursor } from "./Cursors.jsx";
import React from "react";
import styles1 from "./LiveCursors.module.css";
import 'es6-object-assign/auto';
import 'core-js/fn/array/includes';
import 'core-js/fn/promise/finally';
import 'intl';
import ConditionalApp from '../components/ConditionalApp.jsx'
const mockName = () => mockNames[Math.floor(Math.random() * mockNames.length)];

const LiveCursors = () => {
  const name = useMemo(mockName, []);
  const userColors = useMemo(() => colours[Math.floor(Math.random() * colours.length)], []);
  const { space } = useSpace();

  useEffect(() => {
    space?.enter({ name, userColors });
  }, [space]);

  const { self } = useMembers();
  const liveCursors = useRef(null);

  return (
    <div id="live-cursors" ref={liveCursors} className={`example-container ${styles1.liveCursorsContainer}`}>
      <p style={{ maxWidth: "80%", textAlign: "center" }}>
        Move your cursor over the screen to see live cursors in action
      </p>
      <ConditionalApp/>
      <YourCursor self={self} parentRef={liveCursors} />
      <MemberCursors />
    </div>
  );
};

export default LiveCursors;