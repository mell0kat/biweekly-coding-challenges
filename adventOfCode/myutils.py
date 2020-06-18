from pathlib import Path

__author__ = 'kmello'

def read_file(name, year=2019, *, do_strip=True):
    path = Path(f'/Users/katmello/Code/Challenges/adventOfCode/pyaoc{year}/inputs')
    if isinstance(name, int):
        name = f'{name:02d}'
    with open(path / name) as f:
        res = f.readlines()
    if do_strip:
        res = list(map(str.strip, res))
    return res