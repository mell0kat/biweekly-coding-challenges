STARTING_LAYOUT = 'abcdefghijklmnop'
class DancingPrograms:

    def __init__(self, programs: str):
        self.programs = programs # Maybe consider using a deque data structure instead? --> it already has .rotate method implemented
        self.len = len(programs)
        self.instructions = []

    def parse_instructions(self, instructions: str = STARTING_LAYOUT):

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
        """ rotate the order of the programs"""
        [size] = self.intify(*args)
        self.programs = self.programs[-size: self.len] + self.programs[0: self.len - size]

    def exchange(self, *args):
        """swap positions based on index"""
        [a, b] = self.intify(*args)
        programs = self.listify()
        programs[a], programs[b] = programs[b], programs[a]
       
        self.programs = ''.join(programs)

    def partner_dance(self, *args):
        """swap positions based on name"""
        [a, b] = list(*args)
        programs = self.listify()
        idx_a = programs.index(a)
        idx_b = programs.index(b)
        programs[idx_a] = b
        programs[idx_b] = a
        self.programs = ''.join(programs)
        # we can just call self.exchange





d = DancingPrograms('abcde')



d.parse_instructions('s1,x3/4,pe/b')
print(d.programs)

puzzle_input_file = open('/Users/katmello/Code/Challenges/adventOfCode/day16_2017/puzzleInput.txt', 'r')
puzzle_input = puzzle_input_file.read()

d2 = DancingPrograms('abcdefghijklmnop')
d2.parse_instructions(puzzle_input)
print(d2.programs)
