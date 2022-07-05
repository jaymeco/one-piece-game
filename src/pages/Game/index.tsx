/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Boundary } from '../../classes/Boundary';
import { Map } from '../../classes/Map';
import { Sprite } from '../../classes/Sprite';
import collisions from '../../constants/colisions';
import offset from '../../constants/offset';
import playerSheet from '../../constants/player';

const GamePage: React.FC = () => {
  function animate(callback: () => void) {
    window.requestAnimationFrame(() => animate(callback));
    callback();
  }
  useEffect(() => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const context = canvas.getContext('2d');
      canvas.width = 1024;
      canvas.height = 576;

      if (context) {
        const collisionsMap = [];
        for (let i = 0; i < collisions.length; i += 70) {
          const collinsionRow = collisions.slice(i, 70 + i);
          collisionsMap.push(collinsionRow);
        }

        const boundaries: Boundary[] = [];
        collisionsMap.forEach((row, indexI) => {
          row.forEach((symbol, indexJ) => {
            if (symbol === 1025) {
              const newBoundary = new Boundary({
                context,
                position: {
                  x: (indexJ * Boundary.width) + offset.x,
                  y: (indexI * Boundary.height) + offset.y,
                }
              });
              boundaries.push(newBoundary);
            }
          });
        });

        const image = new Image();
        image.src = require('../../assets/Pellet Town.png');
        const foregroundImage = new Image();
        foregroundImage.src = require('../../assets/foregroundObjects.png');
        const playerImage = new Image();
        playerImage.src = require('../../assets/sprites/player/playerDown.png');

        const keys = {
          w: {
            pressed: false,
          },
          a: {
            pressed: false,
          },
          d: {
            pressed: false,
          },
          s: {
            pressed: false,
          },
        };

        const background = new Map({
          position: { x: offset.x, y: offset.y },
          context,
          image
        });

        const foreground = new Map({
          position: { x: offset.x, y: offset.y },
          context,
          image: foregroundImage,
        });

        const player = new Sprite({
          context,
          frames: { max: 4 },
          image: playerSheet.down,
          position: {
            x: (canvas.width / 2) - (192 / 4 / 2),
            y: (canvas.height / 2) - (68 / 2)
          },
          velocity: 0,
          sprites: playerSheet,
        });

        animate(function () {
          background.draw();
          const movables = [background, ...boundaries, foreground];
          boundaries.forEach((boundary) => {
            boundary.draw();
          });
          player.draw();
          foreground.draw();

          let isMoving = true;
          player.isMoving = false;
          if (keys.w.pressed && lastKeyPressed === 'w') {
            player.move('up');
            for (let i = 0; i < boundaries.length; i++) {
              const boundary = boundaries[i];
              const newBoundary = {
                ...boundary,
                position: {
                  x: boundary.position.x,
                  y: boundary.position.y + 3
                },
              }
              if (
                player.isColliding(newBoundary)
              ) {
                player.isMoving = false;
                isMoving = false;
                break;
              }
            }
            if (isMoving) {
              movables.forEach((movable) => {
                movable.position.y += 3;
              });
            }
          } else if (keys.s.pressed && lastKeyPressed === 's') {
            player.move('down');
            for (let i = 0; i < boundaries.length; i++) {
              const boundary = boundaries[i];
              const newBoundary = {
                ...boundary,
                position: {
                  x: boundary.position.x,
                  y: boundary.position.y - 3
                },
              }
              if (
                player.isColliding(newBoundary)
              ) {
                player.isMoving = false;
                isMoving = false;
                break;
              }
            }
            if (isMoving) {
              movables.forEach((movable) => {
                movable.position.y -= 3;
              });
            }
          } else if (keys.a.pressed && lastKeyPressed === 'a') {
            player.move('left');
            for (let i = 0; i < boundaries.length; i++) {
              const boundary = boundaries[i];
              const newBoundary = {
                ...boundary,
                position: {
                  x: boundary.position.x + 3,
                  y: boundary.position.y
                },
              }
              if (
                player.isColliding(newBoundary)
              ) {
                player.isMoving = false;
                isMoving = false;
                break;
              }
            }
            if (isMoving) {
              movables.forEach((movable) => {
                movable.position.x += 3;
              });
            }
          } else if (keys.d.pressed && lastKeyPressed === 'd') {
            player.move('right');
            for (let i = 0; i < boundaries.length; i++) {
              const boundary = boundaries[i];
              const newBoundary = {
                ...boundary,
                position: {
                  x: boundary.position.x - 3,
                  y: boundary.position.y
                },
              }
              if (
                player.isColliding(newBoundary)
              ) {
                player.isMoving = false;
                isMoving = false;
                break;
              }
            }
            if (isMoving) {
              movables.forEach((movable) => {
                movable.position.x -= 3;
              });
            }
          }
        });
        let lastKeyPressed = '';
        window.addEventListener('keydown', (event) => {
          const key = event.key;
          switch (key) {
            case 'w':
              keys[key].pressed = true;
              lastKeyPressed = key;
              break;
            case 'a':
              keys[key].pressed = true;
              lastKeyPressed = key;
              break;
            case 'd':
              keys[key].pressed = true;
              lastKeyPressed = key;
              break;
            case 's':
              keys[key].pressed = true;
              lastKeyPressed = key;
              break;
          }
        });
        window.addEventListener('keyup', (event) => {
          const key = event.key;
          switch (key) {
            case 'w':
              keys[key].pressed = false;
              break;
            case 'a':
              keys[key].pressed = false;
              break;
            case 'd':
              keys[key].pressed = false;
              break;
            case 's':
              keys[key].pressed = false;
              break;
          }
        });
      }
    }
  }, []);

  return (
    <>
      <canvas></canvas>
    </>
  );
};

export default GamePage;
