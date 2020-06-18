# How do I just import DancingPrograms from part_1 code?
from day16_2017.part_1 import DancingPrograms

class DancingPrograms:

    def __init__(self, programs):
        self.programs = programs
        self.len = len(programs)
        self.instructions = []

    def parse_instructions(self, instructions):

        instruction_reader = {
            's': self.spin,
            'x': self.exchange,
            'p': self.partner_dance
        }
        for i in instructions.split(','):
            dance_move = i[0]
            args = i[1:]
            args = args.split('/')
            instruction_reader[dance_move](args)


    def listify(self):
        return list(self.programs)

    @staticmethod
    def intify(_list):
        return list(map(lambda x: int(x), _list))

    def spin(self, *args):
        [size] = self.intify(*args)
        self.programs = self.programs[-size: self.len] + self.programs[0: self.len - size]

    def exchange(self, *args):
        [a, b] = self.intify(*args)
        programs = self.listify()
        char_a = programs[a]
        char_b = programs[b]
        programs[a] = char_b
        programs[b] = char_a
        self.programs = ''.join(programs)

    def partner_dance(self, *args):
        [a, b] = list(*args)
        programs = self.listify()
        idx_a = programs.index(a)
        idx_b = programs.index(b)
        programs[idx_a] = b
        programs[idx_b] = a
        self.programs = ''.join(programs)


puzzle_input_file = open(r'./puzzleInput.txt', 'r')
puzzle_input = puzzle_input_file.read()

original_sequence ='abcdefghijklmnop'
d2 = DancingPrograms(original_sequence)

iterations = 1000000000
memo = { 0: puzzle_input}
counter = 1
d2.parse_instructions(puzzle_input)
memo[counter] = d2.programs

while (d2.programs != original_sequence):
    d2.parse_instructions(puzzle_input)
    memo[counter] = d2.programs
    counter+=1

remainder = iterations % counter
print(remainder)
print(memo[remainder - 1]) # not fcakgjlnmhopebid

