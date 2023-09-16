const exerciseGroups = {
    push: ["pushups", "dips"],
    pull: ["pullups", "hangs"],
    hinge: ["situps", "hollow holds", "planks", "leg raises"],
    squat: ["squats", "side lunges", "starfish", "alt lunges", "calf raises"],
}

const exerciseIntensities = {
    pushups: {
        easy: {
            reps: 10,
            sets: 3,
        },
        medium: {
            reps: 15,
            sets: 3,
        },
        hard: {
            reps: 20,
            sets: 3,
        },
    },
    dips: {
        easy: {
            reps: 10,
            sets: 3,
        },
        medium: {
            reps: 15,
            sets: 3,
        },
        hard: {
            reps: 20,
            sets: 3,
        },
    },
    pullups: {
        easy: {
            reps: 5,
            sets: 3,
        },
        medium: {
            reps: 10,
            sets: 3,
        },
        hard: {
            reps: 15,
            sets: 3,
        },
    },
    hangs: {
        easy: {
            sets: 3,
            duration: "20s",
        },
        medium: {
            sets: 3,
            duration: "30s",
        },
        hard: {
            sets: 3,
            duration: "40s",
        },
    },
    lockoffs: {
        easy: {
            sets: 3,
            duration: "20s",
        },
        medium: {
            sets: 3,
            duration: "30s",
        },
        hard: {
            sets: 3,
            duration: "40s",
        },
    },
    situps: {
        easy: {
            reps: 10,
            sets: 3,
        },
        medium: {
            reps: 15,
            sets: 3,
        },
        hard: {
            reps: 20,
            sets: 3,
        },
    },
    "hollow holds": {
        easy: {
            sets: 3,
            duration: "20s",
        },
        medium: {
            sets: 3,
            duration: "30s",
        },
        hard: {
            sets: 3,
            duration: "40s",
        },
    },
    planks: {
        easy: {
            sets: 3,
            duration: "20s",
        },
        medium: {
            sets: 3,
            duration: "30s",
        },
        hard: {
            sets: 3,
            duration: "40s",
        },
    },
    "leg raises": {
        easy: {
            reps: 10,
            sets: 3,
        },
        medium: {
            reps: 15,
            sets: 3,
        },
        hard: {
            reps: 20,
            sets: 3,
        },
    },
    supermans: {
        easy: {
            sets: 3,
            duration: "20s",
        },
        medium: {
            sets: 3,
            duration: "30s",
        },
        hard: {
            sets: 3,
            duration: "40s",
        },
    },
    "starfish": {
        easy: {
            reps: 10,
            sets: 3,
        },
        medium: {

            reps: 15,
            sets: 3,
        },
        hard: {
            reps: 20,
            sets: 3,
        },
    },
    "alt lunges": {
        easy: {
            reps: 10,
            sets: 3,
        },
        medium: {
            reps: 15,
            sets: 3,
        },
        hard: {
            reps: 20,
            sets: 3,
        },
    },
    squats: {
        easy: {
            reps: 10,
            sets: 3,
        },
        medium: {
            reps: 15,
            sets: 3,
        },
        hard: {
            reps: 20,
            sets: 3,
        },
    },
    "side lunges": {
        easy: {
            reps: 10,
            sets: 3,
        },
        medium: {
            reps: 15,
            sets: 3,
        },
        hard: {
            reps: 20,
            sets: 3,
        },
    },
    "calf raises": {
        easy: {
            reps: 10,
            sets: 3,
        },
        medium: {
            reps: 15,
            sets: 3,
        },
        hard: {
            reps: 20,
            sets: 3,
        },
    },
}

export const randomFourExercises = (intensity: string) => {
    const exercises = Object.values(exerciseGroups).map((group) => {
        const exercise = group[Math.floor(Math.random() * group.length)]
        return exercise
    })
    return exercises.map((exerciseName) => {
        // @ts-ignore
        const exercise = exerciseIntensities[exerciseName][intensity]
        const duration = exercise.duration ? `for ${exercise.duration}` : "";
        const reps = exercise.reps ? `${exercise.reps}x` : "";
        return `${reps}${exercise.sets} ${exerciseName} ${duration}`;
    }).join("\n") as string;
}